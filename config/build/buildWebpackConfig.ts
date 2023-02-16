import webpack from "webpack";
import path from 'path';
import { BuildOptions } from "./types/config";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration  {
    const { mode, paths } = options;
    
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options)
    }
}