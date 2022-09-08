import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleProp, increase, like} = props;
        let classNames = 'list-group-item d-flex justify-content-between'; // базовый класс
        if (increase) { // если increase в позиции true, то конкатенируется еще один класс, тк наши классы это просто строка
            classNames += ' increase'; // класс increase делает з/п и имя золотого цвета
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="like">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type='button'
                        className='btn-cookie btn-sm'
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type='button'
                        className='btn-trash btn-sm'>
                        <i className="fas fa-trash" onClick={onDelete}></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
};

export default EmployeesListItem;