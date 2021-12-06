const SearchPresenter = {
	data() {
		return {
			promise: null,
			data: null,
			error: null,
			searchType: "",
			searchQuery: "",
		};
	},
	created() {
		this.promise = DishSource.searchDishes({});
	},
	props: ["model"],
	watch: {
		promise: {
			immediate: true,
			handler() {
				this.data = null;
				this.error = null;
				if (this.promise) {
					const p = this.promise;
					this.promise
						.then((dt) => {
							if (this.promise === p) {
								this.data = dt;
							}
						})
						.catch((er) => {
							if (this.promise === p) this.error = er;
						});
				}
			},
		},
	},
	render() {
		return (
			<div>
				<SearchFormView
					options={["starter", "main course", "dessert"]}
					onText={(text) => {
						this.searchQuery = text;
					}}
					onDishType={(dishType) => {
						this.searchType = dishType;
					}}
					onSearch={() => {
						this.promise = DishSource.searchDishes({
							type: this.searchType,
							query: this.searchQuery,
						});
					}}
				/>
				{promiseNoData(this.promise, this.data, this.error) || (
					<SearchResultsView
						searchResults={this.data}
						dishChosen={(id) => this.model.setCurrentDish(id)}
					/>
				)}
			</div>
		);
	},
};
