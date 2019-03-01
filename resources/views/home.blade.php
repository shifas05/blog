@extends('layouts.master')
@section('content')
<h3 class="pb-3 mb-4 font-italic border-bottom">
    From the antartica
</h3>
@if(count($posts))
    @foreach( $posts as $post )
        <div class="blog-post">
            <h2 class="blog-post-title">{{ $post->title }}</h2>
            <p class="blog-post-meta">{{ $post->created_at->toFormattedDateString() }} by <a href="#">{{$post->user->name}}</a></p>
            <p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
        </div>
    @endforeach
@endif
<!-- /.blog-post -->
<div class="blog-post">
    <h3 class="blog-post-title">Add New Post</h3>
    @if(Session::has('success_message'))
        <div class="alert alert-success" role="alert">
            {!! session('success_message') !!}
        </div>
    @endif
    <form method="POST" action="{{ route('post.store') }}">
        @csrf
        <div class="form-group">
            <label for="title-post">Title</label>
            <input type="text" class="form-control" name="blog_title" id="title-post" placeholder="Blog Title">
        </div>
        <div class="form-group">
            <label for="blog-post">Post</label>
            <textarea class="form-control" name="blog_post" id="blog-post" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    @if(count($errors))
        @foreach($errors->all() as $message)
            <div class="alert alert-danger" role="alert">
                {{ $message }}
            </div>
        @endforeach
    @endif
</div>
@endsection