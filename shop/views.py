from django.shortcuts import render, get_object_or_404, Response
from rest_framework import viewsets
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import TemplateView
from django.utils.decorators import method_decorator

from .models import Category, Product
from .serializers import ProductSerializer
from cart.forms import CartAddProductForm


# start REST views
class IndexView(TemplateView):
    template_name = 'shop/home.html'

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super(IndexView, self).dispatch(*args, **kwargs)


class ProductViewSet(viewsets.ModelViewSet):
    lookup_field = 'name'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request):
        queryset = self.queryset.filter
        serializer = self.serializer_class(queryset)

        return Response(serializer.data)

# end REST views


def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.in_stock.all()
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    return render(request, 'shop/home.html', {'category': category,
                                                      'categories': categories,
                                                      'products': products})


def product_detail(request, id, slug):
    product = get_object_or_404(Product, id=id, slug=slug, available=True)
    cart_product_form = CartAddProductForm()
    return render(request,
                  'shop/product/detail.html',
                  {'product': product,
                   'cart_product_form': cart_product_form})
