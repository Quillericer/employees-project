import './app-filter.sass';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: '1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;