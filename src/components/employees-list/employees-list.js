import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => { // мы передали массив с данными, которые находятся в App.
    const elements = data.map(item => { // каждый объект с данными будет использоваться в отдельном компоненте
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/> // наш spread оператор это то же самое что и name={item.name} salary={item.salary}
        );
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
};

export default EmployeesList;