@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            Loading , Please Wait
            <br>
            <br>
            <script type="text/javascript">
                $.ajaxSetup({
                    headers: {
                      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $(document).ready(function(){
                    $.ajax({
                        method: "POST",
                        url: "{{URL::to('/user/auth-token')}}",
                    }).done(function(msg){
                        localStorage.user = msg.user;
                        if(msg.status == 1){
                            localStorage.token_book = msg.token;
                            window.location.href = "{{URL::to('/home')}}";
                        }
                    });
                });
            </script>
        </div>
    </div>
@endsection
