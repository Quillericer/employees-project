import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', // имя каждого отдельного рабочего при добавлении
            salary: '', // зарплата каждого отдельного рабочего
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // в значение ключа будет добавляться наш инпут. e.target.name совпадает с нашим атрибутом name, чтобы сразу в нужный ключ записывалось нужное значение
        });
    }

    onSubmit = (e) => {
        e.preventDefault(); // мы отключили стандартное поведение формы, а поэтому наша страница не обновляется при ее отправке
        this.props.onAdd(this.state.name, this.state.salary); // внутри функции onSubmit мы вызываем нашу функцию onAdd, которую передали пропсами через главный компонент app
        this.setState({
            name: '', // имя будет очищено после того, как новый работник был добавлен
            salary: '' // зарплата будет очищена после того, как новый работник был добавлен
        })
    }


    render() {
        const {name, salary} = this.state;
        return (
            <div className='app-add-form'>
                <h3>Добавьте нового сотрудника</h3>
                <form
                 className='add-form d-flex'
                 onSubmit = {this.onSubmit} // при отправке формы будет срабатывать функция onSubmit
                 >
                    <input 
                        type="text"
                        className='form-control new-post-label' 
                        placeholder='Как его зовут?'
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input
                        type="number"
                        className='form-control new-post-label'
                        placeholder='З/П в $?'
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button
                    type='submit'
                    className='btn btn-outline-light'>Добавить
                    </button>    
                </form>
            </div>
        );
    }    
};

export default EmployeesAddForm;