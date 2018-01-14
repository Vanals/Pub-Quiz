import React, { Component } from 'react';
import NewQuizQuestion from './NewQuizQuestion' ;
import NewQuizName from './NewQuizName';
import AddQuestionButton from './AddQuestionButton';
import Question from '../../lib/Question';

class NewQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      placeholder: "Type your quiz name",
      questions: [new Question()]
    }
  }

  handleChangeName = (event) => {
    var state = this.state
    state.name = event.target.value
    this.setState(state)
  }

  handleChangeQuestionType = (index, event) => {
    var state = this.state
    state.questions[index]._type = event.target.value
    this.setState(state)
  }

  handleChangeQuestion = (index, event) => {
    var state = this.state
    state.questions[index]._text = event.target.value
    this.setState(state)
  }

  addQuestion = () => {
    var state = this.state
    state.questions.push(new Question())
    this.setState(state)
  }

  removeQuestion = (index, event) => {
    var state = this.state
    state.questions.splice(index,1)
    this.setState(state)
  }

  handleChangeOption = (questionIndex, index, event) => {
    var state = this.state
    state.questions[questionIndex]._options[index]._text = event.target.value
    this.setState(state)
  }

  addOption = (questionIndex) => {
    var state = this.state
    state.questions[questionIndex].addOption()
    this.setState(state)
  }

  removeOption = (questionIndex, index, event) => {
    var state = this.state
    state.questions[questionIndex].removeOption(index)
    this.setState(state)
  }

  handleChangeAnswer = (questionIndex, index, event) => {
    var state = this.state
    state.questions[questionIndex]._answer[index].text = event.target.value
    this.setState(state)
  }

  render() {
    {console.log(this.state)}
    return(
      <div>
      <NewQuizName
        name={this.state.name}
        placeholder={this.state.placeholder}
        handleChangeName = {this.handleChangeName}
      />
      <AddQuestionButton
        addQuestion={this.addQuestion}
      />
      {this.state.questions.map((question, index) => {
        return (
          <NewQuizQuestion
            question={question}
            key={index}
            index={index}
            handleChangeQuestion={this.handleChangeQuestion}
            removeQuestion={this.removeQuestion}
            handleChangeOption={this.handleChangeOption}
            addOption={this.addOption}
            removeOption={this.removeOption}
            handleChangeAnswer={this.handleChangeAnswer}
            handleChangeQuestionType={this.handleChangeQuestionType}
          />
        )
      })}
      </div>
    );
  };
};

export default NewQuiz;
