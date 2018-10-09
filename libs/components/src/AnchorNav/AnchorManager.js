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

  set items(items) {
    this._items = items;
    // this._items = [
    //   {
    //     link: 'Click Me!',
    //     title: 'Some Section',
    //     name: 'asdf',
    //   },
    // ];
  }
}

export default AnchorManager;
