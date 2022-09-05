import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jessy', salary: 800, increase: true, id: 1, like: false},
                {name: 'Walter', salary: 3000, increase: false, id: 2, like: false},
                {name: 'Hank', salary: 15000, increase: false, id: 3, like: false}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => { // мы собираемся удалить какой-то элемент массива, который мы деструктуризовали, а значит, нужно менять стейт, так как он там находится
            //const index = data.findIndex(elem => elem.id === id) // метод массива findIndex возвращает нам true или false, и если результат true, то мы получим индекс элемента, над которым было произведено действие
            
            //const before = data.slice(0, index); // мы берем с самого первого элемента до того, который мы нашли выше (переменная index)
            //const after = data.slice(index + 1);
            //const newArr = [...before, ...after]; // spread оператор (добавляем в массив все элементы before и after)

            

            return {
                data: data.filter(item => item.id !== id) // более короткий и простой способ удалить элемент (мы по сути не удаляем, а фильтруем массив под наши нужды)
            }
        });
    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        );
    }
}

export default App;