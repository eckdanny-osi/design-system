function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AnchorManager {
  constructor() {
    _defineProperty(this, "_items", []);

    _defineProperty(this, "_currentItem", null);
  }

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
    this._items = items; // this._items = [
    //   {
    //     link: 'Click Me!',
    //     title: 'Some Section',
    //     name: 'asdf',
    //   },
    // ];
  }

}

export default AnchorManager;