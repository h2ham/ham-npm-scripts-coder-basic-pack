const keepfolder = require( 'imagemin-keep-folder' );
const mozjpeg = require( 'imagemin-mozjpeg' );
const pngquant = require( 'imagemin-pngquant' );
const gifsicle = require( 'imagemin-gifsicle' );
const svgo = require( 'imagemin-svgo' );

keepfolder( [ 'src/**/*.{jpg,png,gif,svg}' ], {
	plugins: [
		mozjpeg( {
			quality: 85,
		} ),
		pngquant( {
			quality: [ .7, .8 ],
		} ),
		gifsicle(),
		svgo(),
	],
	replaceOutputDir: output => {
		return output.replace( /src\//, './dist/' );
	},
} ).then( () => {
	console.log( 'Images optimized' );
} );
