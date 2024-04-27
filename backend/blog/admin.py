from django.contrib import admin
from .models import Post, Category, Tag, Comment

my_models = [Post,Category,Tag,Comment]
admin.site.register(my_models)