import React, { Component } from "react";

//react class component: có thuộc tính(s) và phương thức. lớp này được hiểu là 1 thẻ component như thg kia khi nó kế thừa từ lớp đối tượng Component của React. Vì nó là lớp nên thay vì return như thg kia (hàm), nó được render giao diện bởi  method/phương thức/hàm render

export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="card bg-dark">
          <img className="card-img-top" src="holder.js/100x180/" alt="" />
          <div className="card-body">
            <h4 className="card-title text-white">Title</h4>
            <p className="card-text text-white">Text</p>
          </div>
        </div>
        <div className="card bg-white">
          <img className="card-img-top" src="holder.js/100x180/" alt="" />
          <div className="card-body">
            <h4 className="card-title text-white">Title</h4>
            <p className="card-text text-white">Text</p>
          </div>
        </div>

        <div className="card bg-white">
          <img className="card-img-top" src="holder.js/100x180/" alt="" />
          <div className="card-body">
            <h4 className="card-title text-white">Title</h4>
            <p className="card-text text-white">Text</p>
          </div>
        </div>
      </div>
    );
  }
}
