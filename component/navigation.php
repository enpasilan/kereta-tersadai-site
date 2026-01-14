<?php
$url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$slug = basename(parse_url($url, PHP_URL_PATH));
?>
<div class="main-navigation">
    <nav id="navigation" class="navigation d-none d-lg-inline-block">
        <ul>
            <li class="current-menu-item">
                <a href="/" <?php echo ($slug == "" ? "class='linkactive'" : ""); ?>>Halaman</a>
            </li>
            <li>
                <a href="about" <?php echo ($slug == "about" ? "class='linkactive'" : ""); ?>>Tentang Kami</a>
            </li>
			<li>
                <a href="gallery" <?php echo ($slug == "gallery" ? "class='linkactive'" : ""); ?>>Galeri</a>
            </li>
			<li>
                <a href="contact" <?php echo ($slug == "contact" ? "class='linkactive'" : ""); ?>>Hubungi Kami</a>
            </li>
        </ul>
    </nav>
    <div class="header-btn d-inline-block">
        <a href="tel:+60149311086" class="button-round-primary marroon-bg text-white" id="call-now-menu">Call Sekarang</a>
    </div>
</div>
