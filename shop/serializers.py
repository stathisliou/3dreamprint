from rest_framework import serializers

from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'category', 'name', 'slug', 'image', 'description', 'price',
                'stock', 'available', 'updated', 'created',)
