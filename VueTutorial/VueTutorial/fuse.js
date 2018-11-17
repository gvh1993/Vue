const { FuseBox, SassPlugin, CSSPlugin, CSSResourcePlugin, QuantumPlugin, WebIndexPlugin, Sparky } = require("fuse-box");
const { src, task, exec, context, watch, fuse } = require("fuse-box/sparky");

context(  
    class {
        getConfig() {
            return FuseBox.init({
                homeDir: "wwwroot/src",
                target: "browser@esnext",
                output: "wwwroot/dist/$name.js",
                hash: this.isProduction,
                debug: true,
                sourceMaps: !this.isProduction,
                log: { showBundledFiles: true},
                cache: true,
                useTypescriptCompiler: true,
                plugins: [
                    [
                        SassPlugin(),
                        //CSSResourcePlugin({ dist: "wwwroot/dist/css-resources" }),
                        CSSPlugin()
                    ],
                    CSSPlugin(),
                    this.isProduction && QuantumPlugin({
                        uglify: true,
                        treeshake: true,
                        bakeApiIntoBundle: "app",
                        css: { clean: true },
                        extendServerImport: true
                    }),
                    WebIndexPlugin()
                ],
            });
        }
        createBundle(fuse) {
            const app = fuse.bundle("app");
            if (!this.isProduction) {
                app.watch()
                app.hmr({ socketURI: "ws://localhost:3333"})
            }
            app.instructions("> index.ts");
            return app;
        }
    },
);

task("default", async context => {
    const fuse = context.getConfig();
    fuse.dev({
        port: 3333,
        socketURI: "ws://localhost:3333",
    });
    context.createBundle(fuse);
    await fuse.run();
});

task("dist", async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    context.createBundle(fuse);
    await fuse.run();
});
