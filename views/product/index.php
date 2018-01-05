<?php require_once 'views/index/header.php'; ?>

<div class="catalog-detail">
	<div class="catalog-container">
		<div class="left-col">
			<span class="detail-image zoom" id="product_image">
				<img src="<?=$data["image"]?>" alt="Detail Image">
			</span>
		</div>
		<div class="right-col">
			<div class="detail-info">
				<div class="detail-block">
					<div class="detail-info-title">
						<h4><?=$data["name"]?></h4>
					</div>
					<div class="detail-info-price">
						<?php if ($data["is_sale"] == 1): ?>
							<span class="detail-product-old-price"><?=$data["price"]; ?></span>
							<span><?=$data["sale_price"]; ?></span>

						<?php else: ?>
							<span><?=$data["price"]; ?></span>
						<?php endif ?>
						<div style="display: none;" id="detail-product-id"><?=$data["id"];?></div>
					</div>								
				</div>
				<div class="detail-block">
					<div class="detail-info-is_availability">
						Наличие: 
						<?php if ($data["is_availability"] == 1): ?>
							<span class="are_available">Есть в наличии</span>
						<?php else: ?>
							<span class="not_available">Нет в наличии</span>
						<?php endif ?>
						
					</div>
					<div class="detail-info-article">
						Артикль: <span><?=$data["article"]?></span>
					</div>
					<div class="detail-info-category">
						Категория: <a href="#"><?=$data["category_name"]?></a>
					</div>
				</div>
				<div class="detail-block">
					<div class="detail-info-size">
						<h5>Размер</h5>
						<div class="block-size">
							<?php foreach ($getSize as $index => $size): ?>
									<input type="radio" name="size-item" <?php if (in_array($size, $checkSizeInCart)): ?><?="class='item_in_cart'"?><?php endif ?> id="size-item_<?=$size?>">
									<label for="size-item_<?=$size?>" class="size-item"><?=$size?></label>
							<?php endforeach ?>
						</div>
					</div>
					<div class="detail-info-composition">
						<h5>Состав</h5>
						<div class="block-composition">
							<?php foreach ($getComposition as $composition): ?>
								<div class="composition-item"><?=$composition?></div>
							<?php endforeach ?>
						</div>
					</div>
				</div>
				<div class="detail-block">
					<div class="detail-button-block">
						<?//php if (!$checkCart): ?>
							<div class="detail-add-to-cart detail-add-btn" id="detail-add-to-cart">
								<i class="fa fa-shopping-cart" aria-hidden="true"></i>
								<span>Добавить в корзину</span>
							</div>
							<span id="detail-product-error"></span>
						<?//php else: ?>
<!-- 							<a href="../cart">
								<div class="detail-add-to-cart detail-add-btn in-cart" id="detail-add-to-cart-in">
									В корзине
								</div>
							</a>	 -->				
						<?//php endif ?>

						<div class="detail-add-to-compare detail-add-btn" id="detail-add-to-compare">
							<i class="fa fa-heart" aria-hidden="true"></i>
							Отложить
						</div>									
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="might-like">
		<div class="title">
			<h1><span>Также может понравиться</span></h1>
		</div>
		<div class="might-like-content">
			
			<?php foreach ($relatedProducts as $key => $value): ?>
				<div class="like-item">
					<div class="like-item-image"><a href="../product/<?=$value["id"]?>"><img src="<?=$value["image"]?>" alt="Like Image"></a></div>
					<div class="like-item-info">
						<div class="like-item-info-title">
							<span><?=$value["name"];?> <?=$value["article"];?></span>
						</div>
						<div class="like-item-info-price">
							<?php if ($value["is_sale"] == 1): ?>
								<span class="like-old-price"><?=$value["price"];?></span> <span><?=$value["sale_price"];?></span>
							<?php else: ?>
								<span><?=$value["price"];?></span>
							<?php endif ?>
						</div>
					</div>				
				</div>				
			<?php endforeach ?>
		</div>
	</div>
</div>

<?php require_once 'views/index/footer.php'; ?>
<script type="text/javascript" src="/static/js/cart.js"></script>
<script type="text/javascript">
	$('#product_image').zoom();
</script>