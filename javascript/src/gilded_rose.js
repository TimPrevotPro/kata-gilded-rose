class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            if ((this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') && (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros')) {
                this.items[i].quality = this.items[i].quality - 1;
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if ((this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') && (this.items[i].sellIn < 11) && (this.items[i].quality < 50)) {
                        this.items[i].quality = this.items[i].quality + 1;
                        if (this.items[i].sellIn < 6) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                switch (this.items[i].name) {
                    case 'Aged Brie':
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                        break;
                    case 'Backstage passes to a TAFKAL80ETC concert':
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                        break;
                    case 'Sulfuras, Hand of Ragnaros':
                        break;
                    default:
                        if (this.items[i].quality > 0) {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                }
            }
        }
        return this.items;
    }
}

module.exports = {
    Item,
    Shop
}
