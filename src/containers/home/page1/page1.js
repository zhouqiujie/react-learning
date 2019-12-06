import React, { Component } from 'react';

export class Page1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'null',
            age: '222',
            gender: '1',
            isChinese: false
        }
    }

    onChangeInput = (event) => {
        // event.persist()
        console.log(event.target.value)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name, ':', value)
        this.setState({
            [name]: value
        })


    }

    onSubmit = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="container text-center">
                <h6>page1</h6>
                {/* <form> */}


                <div>
                    <label>姓名：</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.onChangeInput}></input>
                </div>
                <div>
                    <label>年龄：</label>
                    <input name="age" type="text" value={this.state.age} onChange={this.onChangeInput}></input>
                </div>
                <div>
                    <label>性别：</label>
                    <label>
                        男
                        <input name="gender" type="radio" value="1" checked={this.state.gender === '1'} onChange={this.onChangeInput}></input>
                    </label>
                    <label>
                        女
                        <input name="gender" type="radio" value="0" checked={this.state.gender === '0'} onChange={this.onChangeInput}></input>
                    </label>
                </div>
                <div>
                    <label>是吗：</label>
                    <input name="isChinese" type="checkbox" checked={this.state.isChinese} onChange={this.onChangeInput}></input>
                </div>
                {/* </form> */}
                <div>
                    <button onClick={this.onSubmit}>提交</button>
                </div>

            </div>
        );
    }
}

export default Page1;
