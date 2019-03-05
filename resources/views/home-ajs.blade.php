<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Demo App</title>
  <script type="text/javascript">
    var backend = '<?php echo URL::to('/') ?>';
  </script>
  <meta name="description" content="material, material design, angular material, app, web app, responsive, responsive layout, home, home panel, home dashboard, flat, flat ui, ui kit, AngularJS, ui route, charts, widgets, components" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link href="{{ asset('assets/app/common/css/style.css') }}" rel="stylesheet">
  {{-- <link href="{{ asset('assets/app/common/css/font.css') }}" rel="stylesheet"> --}}
  {{-- <link href="{{ asset('assets/app/common/css/custom.css') }}" rel="stylesheet"> --}}
  <base href="/home">
</head>
<body ng-app="app">
  <div id="wrapper" ui-view ng-controller="HeaderCtrl"></div>
  {{-- <script src="{{ asset('assets/app/common/js/style.js') }}"></script> --}}
  <script src="{{ asset('assets/app/common/app.src.js?v=2.2') }}"></script>
  <script src="{{ asset('assets/app/home/app.src.js?v=2.2') }}"></script>
</body>
</html>
