import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) =>
    {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        console.log(fish);
    };
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name = "name" ref = {this.nameRef} placeholder= "Наименование" />
                <input type="text" name = "price" ref = {this.priceRef} placeholder= "Стоимость" />
                <select name="status" ref = {this.statusRef}>
                    <option value="available">В наличии</option>
                    <option value="unavailable">Продана</option>
                </select>
                <textarea name="desc" placeholder="Описание" ref={this.descRef}></textarea>
                <input type="text" name = "image" ref = {this.imageRef} placeholder= "Изображение продукта" />
                <button type="submit">Добавить</button>
            </form>
        )
    }
};
export default AddFishForm;