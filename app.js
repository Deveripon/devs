const productList = document.querySelector(".product-list");

let product = "";
fetch("https://fakestoreapi.com/products")
	.then((data) => data.json())
	.then((data) => {
		data.map((item) => {
			product += `
			
				<div class="col-3 my-2">
					<div class="card" style="width: 18rem">
						<img
							class="card-img-top"
							src="${item.image}"
							alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">${item.title}</h5>
							<h6 class="card-text">Price : $ ${item.price}</h6>
							<p style="height: 30px; overflow:hidden" class="card-text">
							${item.description}
							</p>

							<a href="#" class="btn btn-primary">Add to cart</a>
						</div>
					</div>
				</div>
			
			`;
		});
		productList.innerHTML = product;
	});
