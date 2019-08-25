<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="ocs-site-verification" content="5c94a5ca3c59b4fe660c17dd96d08f0e" />
        <title>
            @section('title')
            Victory Garuba
            @show
        </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet">
    
        <!-- Styles -->

    <script src="{{mix('js/manifest.js')}}"></script>
   <script src="{{mix('js/vendor.js')}}" defer></script>
    <script src="{{mix('js/app.js')}}" defer></script>

            {{-- <script>
        /*
        Update Service Worker Function
 */
const _updateReady = (sw) => {
    // UIkit.modal.confirm('New Version Available')
    //     .then(() => {
    //         //  Accept
            sw.postMessage({ action: 'skipWaiting' })
        // }, () => {
        //     //  Reject
        // })
};

/*
Monitor SW install state
 */
const _trackInstalling = (sw) => {
    sw.addEventListener('statechange', () => {
        if (sw.state === 'installed') {
            return _updateReady(sw)
        }
    })
};
        if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
        .then(sw=>{
        //  if (sw.waiting) {
        //     _updateReady(sw.waiting);
        //     return
        // }
        // if (sw.installing) {
        //     _trackInstalling(sw.installing);
        //     return
        // }
        // sw.addEventListener('updatefound', () => {
        //     _trackInstalling(sw.installing)
        // })
    }).catch(error => {
        console.log('fail', error)
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
        })
        }
        </script> --}}
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
        @stack('scripts')
    @section('styles')
    @show
    </head>
    <body>
        <div id="app">
        @include('layouts/header')
        <main class="">
            @yield('content')
        </main>
        @include('layouts/footer')
    </div>
        <script>
            document.querySelector('.hello figure>img').setAttribute('class',"uk-card uk-card-default uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-card uk-padding-small")
        </script>
    </body>
</html>
