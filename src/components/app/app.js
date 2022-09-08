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
                {name: 'Jessy', salary: '800', increase: true, id: 1, like: true},
                {name: 'Walter', salary: '3000', increase: false, id: 2, like: false},
                {name: 'Hank', salary: '15000', increase: false, id: 3, like: false}
            ]
        }
        this.maxId = 4;
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

    newEmployee = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++,
            like: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }      
        });
    }

    onToggleProp = (id, prop) => {
        //this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);

            //const old = data[index];
            //const newItem = {...old, increase: !old.increase}; // подставляем все данные из переменной old (объект)
            //const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            //return {
            //    data: newArr
            //}
        //});

        this.setState(({data}) => ({
            data: data.map(item => { // map возвращает нам новый массив
                if (item.id === id) { // находим нужный объект
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length,
            employeesIncrease = this.state.data.filter(item => item.increase === true).length;
        return (
            <div className='app'>
                <AppInfo
                employees={employees}
                employeesIncrease={employeesIncrease}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                onAdd={this.newEmployee}/>
            </div>
        );
    }
}

export default App;