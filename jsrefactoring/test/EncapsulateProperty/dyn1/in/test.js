function A() {
    this.x /* encapsulate */ = 23;
}

var a = new A();
var n = document.getElementById('name').value;
var x = a[n];
