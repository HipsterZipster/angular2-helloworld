(function() {

    var ngVersion = '@2.0.0-rc.0';

    function npmUrl(url, version) {
        return 'https://npmcdn.com/' + url + version;
    }

    var map = {
        'rxjs': npmUrl('rxjs','@5.0.0-beta.6'),
        '@angular/core': npmUrl('@angular/core', ngVersion),
        '@angular/compiler': npmUrl('@angular/compiler', ngVersion),
        '@angular/common': npmUrl('@angular/common', ngVersion),
        '@angular/platform-browser': npmUrl('@angular/platform-browser', ngVersion),
        '@angular/platform-browser-dynamic': npmUrl('@angular/platform-browser-dynamic', ngVersion),
        '@angular/http': npmUrl('@angular/http', ngVersion),
        '@angular/router': npmUrl('@angular/router', ngVersion),
        'app': 'app'
    };

    //Register custom "app" and rxjs packages
    var packages = {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { defaultExtension: 'js' }
    };

    //Register Angular packages
    for (var prop in map) {
        if (prop.startsWith('@angular')) {
            packages[prop] = { main: 'index', defaultExtension: 'js' }
        }
    }

    System.config({
        transpiler: 'typescript',
        typescriptOptions: { emitDecoratorMetadata: true },
        map: map,
        packages: packages
    });

})();
