import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value = {this.state.term}
          onChange={e => this.inputChange(e.target.value)} 
        />
      </div>
    );
  }

  inputChange(term) {
    this.setState({term});
    this.props.searchChange(term);
  }
}

export default Search;

/*
.debounce(func, [wait=0], [options={}])
source, npm package.
Создает функцию debounced, которая задерживает вызов func, 
до тех пор, пока не истечет миллисекунды ожидания с момента последнего вызова функции debounced.
Функция debounced использует метод cancel для отмены отложенных func-вызовов 
и метод flush для немедленного вызова.
Укажите параметры, указывающие, следует ли вызывать func на 
ведущем и/или заднем фронтах таймаута ожидания.
func вызывается с последними аргументами, предоставленными функцией debounced.
Последующие вызовы функции debounced возвращают результат последнего вызова func.
Заметка: Если начальные и конечные значения равны true, func вызывается на заднем фронте таймаута, 
только если выведенная функция вызывается более чем один раз во время ожидания.
Если wait равно 0, а lead - false, вызов func откладывается до следующего тика, 
похож на предыдущий метод setTimeout с тайм-аутом 0.
*/
