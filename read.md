```php
/* Simple Light Box */
add_filter('the_content', [$this, 'autoexpand_rel_wlightbox'], 99);
add_filter('the_excerpt', [$this, 'autoexpand_rel_wlightbox'], 99);

function autoexpand_rel_wlightbox ($content) {
global $post;
$pattern = "/(<a(?![^>]*?rel=['\"]lightbox.*)[^>]*?href=['\"][^'\"]+?\.(?:bmp|gif|jpg|jpeg|png|webp)['\"][^\>]*)>/i";
$replacement = '$1 class="simplelightbox" rel="lightbox['.$post->ID.']">';
$content = preg_replace($pattern, $replacement, $content);
return $content;
}
```
