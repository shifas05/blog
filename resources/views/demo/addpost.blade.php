//add post blade
<!DOCTYPE html>
<html>
<head>
    <title>Laravel 5.7 AJAX Pagination Example - ItSolutionStuff.com</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />

 
    <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> -->
</head>
  
<body>
<div class="container">
    <h1>Laravel 5.7 AJAX Pagination Example</h1>
    <div id="tag_container">
          
    </div>
    <div class="blog-post">
        <h3 class="blog-post-title">Add New Post</h3>
        @if(Session::has('success_message'))
            <div class="alert alert-success" role="alert">
                {!! session('success_message') !!}
            </div>
        @endif
        <form method="POST" action="{{ route('post.store') }}" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="title-post">Title</label>
                <input type="text" class="form-control" name="blog_title" id="title-post" placeholder="Blog Title">
            </div>
            <div class="form-group">
                <label for="blog-post">Post</label>
                <textarea class="form-control" name="blog_post" id="blog-post" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="poster">File Upload</label>
                <input type="file" class="form-control" name="blog_file" id="poster">
            </div>
            <div class="progress">
                <div class="bar" style="color: green"></div>
                <div class="percent">
                    0%
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <button class="btn btn-warning" onclick="goBack()">Cancel</button>
        @if(count($errors))
            @foreach($errors->all() as $message)
                <div class="alert alert-danger" role="alert">
                    {{ $message }}
                </div>
            @endforeach
        @endif
    </div>
</div>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script type="text/javascript">
    function validate(formData, jqForm, options) {
        var form = jqForm[0];
        if (!form.blog_file.value) {
            alert('File not found');
            return false;
        }
    }
 
    (function() {
 
    var bar = $('.bar');
    var percent = $('.percent');
    var status = $('#status');
 
    $('form').ajaxForm({
        beforeSubmit: validate,
        beforeSend: function() {
            status.empty();
            var percentVal = '0%';
            var posterValue = $('input[name=blog_file]').fieldValue();
            bar.width(percentVal)
            percent.html(percentVal);
        },
        uploadProgress: function(event, position, total, percentComplete) {
            var percentVal = percentComplete + '%';
            bar.width(percentVal)
            percent.html(percentVal);
        },
        success: function() {
            var percentVal = 'Wait, Saving';
            bar.width(percentVal)
            percent.html(percentVal);
        },
        complete: function(xhr) {
            status.html(xhr.responseText);
            alert('Uploaded Successfully');
            window.location.href = "/home";
        }
    });
     
    })();
    function goBack(){
        window.location.href = "{{ URL::to('/home') }}";
    }
</script>
</body>
</html>