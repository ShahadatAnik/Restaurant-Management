class PageInfo {
	constructor(title, url) {
		this.title = title;
		this.url = url;
	}

	getTitle() {
		return this.title;
	}

	getUrl() {
		return this.url;
	}

	getAddOrUpdateModalId() {
		return `add_or_update_${this.getTitle()}_modal`;
	}

	getDeleteModalId() {
		return `delete_${this.getTitle()}_modal`;
	}

	getFetchUrl() {
		return `/${this.getUrl()}`;
	}

	getDeleteUrl() {
		return `/${this.getUrl()}`;
	}
}

export default PageInfo;
