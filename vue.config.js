const port  = process.env.port || 9090;
const IS_PRODUCTION = process.env.NODE_ENV ==="production";
const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir);
}
module.exports = {
    lintOnSave:false,
    // lintOnSave:process.env.NODE_ENV ==="development"
    devServer:{
        port,
        open:true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy:{
            //http://localhost:8000/mock/dev-api/xx
            [process.env.VUE_APP_BASE_API]:{
                target:'http://localhost:8000/mock',
                changeOrigin:true,
                pathRewrite:{
                    [process.env.VUE_APP_BASE_API]:"" 
                }
            }
        }
    },
    configureWebpack:{
        name:"project",
        resolve:{
            alias:{
                '@':resolve('src'),
                'views':resolve('src/views'),
                'components':resolve('src/components'),
                'utils':resolve('src/utils'),
                'style':resolve('src/style')
            }
        }
    }
}
