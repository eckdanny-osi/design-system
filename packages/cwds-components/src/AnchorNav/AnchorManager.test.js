class AnchorManager {
  _items = [];

  _currentItem = null;

  addItem(item) {
    this._items = [...this._items, item];
  }

  removeItem(id) {
    this._items = this._items.filter(item => item.slug != id);
  }

  get items() {
    return this._items;
  }
}
