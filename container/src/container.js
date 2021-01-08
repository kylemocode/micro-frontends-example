import { mount as postsMount } from 'products/PostsIndex';
import { mount as cartMount } from 'cart/CartShow';

postsMount(document.querySelector('#my-posts'));
cartMount(document.querySelector('#my-cart'));
