<?php 
	require_once 'engine/Session.php';
	Session::init();
	//var_dump($_SESSION['products']);
	require_once 'views/index/header.php';
?>


<section class="user-cart">
	<div class="container">
		<h2 class="line-title">Корзина</h2>
		<div class="cart-container">
			<?php if (!empty($cartItems)): ?>
				<div class="cart-list">
					<table class="cart-table">
						<thead>
							<th class="cart-table-image"></th>
							<th class="cart-table-description">Описание</th>
							<th class="cart-table-size">Размер</th>
							<th class="cart-table-brand">Бренд</th>
							<th class="cart-table-category">Категория</th>
							<th class="cart-table-price">Цена</th>
						</thead>
						<tbody>
							<?php foreach ($cartItems as $item): ?>
								<?php foreach ($item["size"] as $sizeArr): ?>
									<?php foreach ($sizeArr as $size): ?>
										<tr>
											<td class="cart-table-image">
												<a href="../product/<?=$item[id]?>"><img src="<?=$item[image]?>" alt=""></a>
											</td>
											<td class="cart-table-description"><a href="../product/<?=$item[id]?>"><p class="description-name"><?=$item[name]?></p> <p class="description-article"><?=$item[article]?></p></a></td>
											<td class="cart-table-size">
												<?=$size;?>
											</td>
											<td class="cart-table-brand"><?=$item[brand_name]?></td>
											<td class="cart-table-category"><?=$item[category_name]?></td>
											<?php if ($item["is_sale"] == 1): ?>
												<td class="cart-table-price"><?=$item[sale_price]?>
													<span class="cart-delete-item" data-size="<?=$size;?>" data-id="<?=$item["id"];?>">X</span>
												</td>
											<?php elseif($item['is_sale'] == 0): ?>
												<td class="cart-table-price"><?=$item[price]?>
													<span class="cart-delete-item" data-size="<?=$size;?>" data-id="<?=$item["id"];?>"></span>
												</td>
											<?php endif ?>
										</tr>										
									<?php endforeach ?>
								<?php endforeach ?>
							<?php endforeach ?>	
						</tbody>
					</table>
					<div class="cart-total-price">
						<span class="cart-total-price-title">Товаров в корзине: </span><span class="cart-total-items-count"><?=$countItems?></span>
						<span class="cart-total-price-title">Сумма: </span><span class="cart-total-price-count"><?=$totalPrice?></span>
					</div>
					<div class="cart-checkout">
						<a href="./catalog/all">Продолжить покупки</a>
						<a id="checkoutBtn" class="checkoutBtn" href="../cart/ordering">Оформить</a>
					</div>

				</div>
			<?php else: ?>
				<div class="cart-empty">Корзина пуста</div>
			<?php endif ?>
		</div>
	</div>
</section>



	<?php  require_once 'views/index/footer.php'; ?>
	<script type="text/javascript" src="/static/js/cart.js"></script>




