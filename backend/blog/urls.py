from django.urls import path
from .views import PostListCreateAPIView, PostRetrieveUpdateDestroyAPIView,CreatePost, EditPost, AdminPostDetail, DeletePost

urlpatterns = [
    path('posts/', PostListCreateAPIView.as_view(), name='post-list-create'),
    path('posts/<int:pk>/', PostRetrieveUpdateDestroyAPIView.as_view(), name='post-retrieve-update-destroy'),
    # path('posts/create/', CreatePostAPIView.as_view(), name='create-post'),  # New route for creating posts
        # Post Admin URLs
    path('admin/create/', CreatePost.as_view(), name='createpost'),
    path('admin/edit/postdetail/<int:pk>/', AdminPostDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', EditPost.as_view(), name='editpost'),
    path('admin/delete/<int:pk>/', DeletePost.as_view(), name='deletepost'),

]