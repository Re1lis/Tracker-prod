import React, { useState, useEffect, useRef } from 'react';
import './array.css'

const GoalList = ({ updateCountCoins, changeProgress, downCountCoins }) => {
  const [goals, setGoals] = useState([
    {id: 1, name:"Проубуждение каждый день в одно и то же время", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 2, name:"Физические упражнения в течение 15-30 минут", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 3, name:"Полезный завтрак", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 4, name:"Планирование дня и составление списка задач", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 5, name:"Пить достаточное количество воды (2 литра)", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 6, name:"Медитация или йога", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 7, name:"Чтение книг (30-50 страниц)", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 8, name:"Практика нового навыка или хобби", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 9, name:"Поработать", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 10, name:"Прогулка", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 11, name:"Утренняя пробежка", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 12, name:"Проверка почты", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 13, name:"Постирать вещи", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 14, name:"Ранний подъем", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 15, name:"Перекусить", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 16, name:"Чтение новостей", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 17, name:"Пройти 10к шагов за день", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 18, name:"Пройти 7к шагов за день", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 19, name:"Уборка дома или квартиры", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 20, name:"Помыть посуду", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 21, name:"Сделать уроки", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 22, name:"Отказаться от табака и никотина", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 23, name:"Отказаться от вредной пищи", startTime: '07:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 24, name:"Потреблять достаточное количество калорий", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
    {id: 25, name:"Прокрастинация", startTime: '06:00', endTime: '09:00', startDate: new Date().toISOString().split('T')[0], endDate: new Date().toISOString().split('T')[0]  },
  ]);


  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRemoveAndChangeCounter = (index, goal) => {
    handleRemoveGoal(index);
    if (!isTimeExpired(goal)) {
      updateCountCoins();
      changeProgress()
      setStateCompletedGoals(stateCompletedGoals + 1)
    }
    else{
      downCountCoins()
      setStatsUnfulfilledGoals(statsUnfulfilledGoals + 1)
    }
  };

  useEffect(() => {
    const updatedSelectedGoals = selectedGoals.map(goal => ({
      ...goal,
      isExpired: isTimeExpired(goal)
    }));
    setSelectedGoals(updatedSelectedGoals);
  }, [currentTime]);

  const isTimeExpired = (goal) => {
    const endTime = new Date(`${goal.endDate}T${goal.endTime}`);
    return currentTime > endTime;
  };

  


  const [selectedGoals, setSelectedGoals] = useState(JSON.parse(localStorage.getItem('selectedGoals')) || []);
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalStartTime, setNewGoalStartTime] = useState('');
  const [newGoalEndTime, setNewGoalEndTime] = useState('');
  const [newGoalStartDate, setNewGoalStartDate] = useState('');
  const [newGoalEndDate, setNewGoalEndDate] = useState('');

  const [statsAllGoals, setStatsAllGoals] = useState(parseInt(localStorage.getItem('statsAllGoals')) || 0)
  const [statsUnfulfilledGoals, setStatsUnfulfilledGoals ] = useState(parseInt(localStorage.getItem('statsUnfulfilledGoals')) || 0)
  const [stateCompletedGoals, setStateCompletedGoals] = useState(parseInt(localStorage.getItem('stateCompletedGoals')) || 0)

  const handleChangeTime = (index, timeType, newTime) => {
    const newGoals = [...goals];
    newGoals[index][timeType] = newTime;
    setGoals(newGoals);
  };

  const handleChangeDate = (index, dateType, newDate) => {
    const currentDate = new Date().toISOString().split('T')[0];
    if (newDate >= currentDate) {
      const newGoals = [...goals];
      newGoals[index][dateType] = newDate;
      setGoals(newGoals);
    }
  };

  const handleRemoveGoal = (index) => {
    const selectedGoal = selectedGoals[index];
    if (selectedGoal.name === 'Не выполнено') {

    } else {
      setSelectedGoals((prevGoals) => prevGoals.filter((_, i) => i !== index));
    }
  };

  const handleAddGoal = (index) => {
    setSelectedGoals((prevGoals) => [...prevGoals, goals[index]]);
    setStatsAllGoals(statsAllGoals + 1)
  };

  const handleAddCustomGoal = () => {
    const newGoal = {
      id: goals.length + 1,
      name: newGoalName,
      startTime: newGoalStartTime,
      endTime: newGoalEndTime,
      startDate: newGoalStartDate,
      endDate: newGoalEndDate,
    };
    setSelectedGoals((prevGoals) => [...prevGoals, newGoal]);
    setNewGoalName('');
    setNewGoalStartTime('');
    setNewGoalEndTime('');
    setNewGoalStartDate('');
    setNewGoalEndDate('');
    setStatsAllGoals(statsAllGoals + 1)
  };

  localStorage.setItem('statsAllGoals', JSON.parse(statsAllGoals))
  localStorage.setItem('stateCompletedGoals', JSON.parse(stateCompletedGoals))
  localStorage.setItem('statsUnfulfilledGoals', JSON.parse(statsUnfulfilledGoals))
  localStorage.setItem('selectedGoals', JSON.stringify(selectedGoals))

  const handleResetStatsAndLocalStorage = () => {
    setStatsAllGoals(0);
    setStateCompletedGoals(0);
    setStatsUnfulfilledGoals(0);
    setSelectedGoals([])
  
    localStorage.removeItem('statsAllGoals');
    localStorage.removeItem('stateCompletedGoals');
    localStorage.removeItem('statsUnfulfilledGoals');
    localStorage.removeItem('selectedGoals')
  };


  useEffect(() => {
    localStorage.setItem('selectedGoals', JSON.stringify(selectedGoals));
  }, [selectedGoals]);

  return (
    <>
      <h2 className='title-section' id= 'goals-and-tasks-section-href'>Цели и привычки</h2>
      <div className='goals-tasks-container'>
      <div className = 'list-input-container'>
      <h2 className='subtitle'>Добавить новую привычку</h2>
      <div className='small-container-with-input-and-label custom-goal'>
        <label>Название привычки: </label>
        <input
            className="input-date-or-time"
          type="text"
          value={newGoalName}
          onChange={(e) => setNewGoalName(e.target.value)}
        />
      </div>
      <div className='small-container-with-input-and-label custom-goal'>
        <label>Дата начала: </label>
        <input
          className="input-date-or-time"
          type="date"
          value={newGoalStartDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setNewGoalStartDate(e.target.value)}
        />
        <label>Время начала: </label>
        <input
          className="input-date-or-time"
          type="time"
          value={newGoalStartTime}
          onChange={(e) => setNewGoalStartTime(e.target.value)}
        />
      </div>
      <div className='small-container-with-input-and-label custom-goal'>
        <label>Дата окончания: </label>
        <input
          className="input-date-or-time"
          type="date"
          value={newGoalEndDate}
          min={newGoalStartDate}
          onChange={(e) => setNewGoalEndDate(e.target.value)}
        />
        <label>Время окончания: </label>
        <input
          className="input-date-or-time"
          type="time"
          value={newGoalEndTime}
          onChange={(e) => setNewGoalEndTime(e.target.value)}
        />
      </div>
      <button className="button-for-delete-or-add" onClick={handleAddCustomGoal}>Добавить привычку</button>

      <h2 className='subtitle'>Список привычек</h2>
      <ul className='list-array-container'>
        {goals.map((goal, index) => (
          <li key={goal.id}>
            <div className='goal-item-container'>
              <span >{goal.name}</span>
              <div className='small-container-with-input-and-label'>
                <label>Дата начала:</label>
                <input
                  className="input-date-or-time"
                  type="date"
                  value={goal.startDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleChangeDate(index, 'startDate', e.target.value)}
                />
                <label>Время начала:</label>
                <input
                  className="input-date-or-time"
                  type="time"
                  value={goal.startTime}
                  onChange={(e) => handleChangeTime(index, 'startTime', e.target.value)}
                />
              </div>
              <div className='small-container-with-input-and-label'>
                <label>Дата окончания:</label>
                <input
                  className="input-date-or-time"
                  type="date"
                  value={goal.endDate}
                  min={goal.startDate}
                  onChange={(e) => handleChangeDate(index, 'endDate', e.target.value)}
                />
                <label>Время окончания:</label>
                <input
                  className="input-date-or-time"
                  type="time"
                  value={goal.endTime}
                  onChange={(e) => handleChangeTime(index, 'endTime', e.target.value)}
                />
              </div>
              <button className="button-for-delete-or-add" onClick={() => handleAddGoal(index)}>Добавить привычку</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <h2 className='subtitle'>Выбранные привычки</h2>
        <ul className='selected-goals'>
          {selectedGoals.map((goal, index) => (
            <li key={index}>
              <div>
                <span className='title-goal'>Привычка: {goal.name} |</span>
                <span className='start-date-time'> Начало: {goal.startDate} {goal.startTime} |</span>
                <span className='end-date-time'> Окончание: {goal.endDate} {goal.endTime} |</span>
                <button className="button-for-delete-or-add" onClick={() => handleRemoveAndChangeCounter(index, goal)}>
                  {isTimeExpired(goal) ? 'Не выполнено' : 'Выполнено'}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h2 className='subtitle'>Ваша статистика:</h2>
        <h3 className="text-statistic">Количество всех привычек: {statsAllGoals}</h3>
        <br />
        <h3 className="text-statistic">Количество выполненных привычек {stateCompletedGoals}</h3>
        <br />
        <h3 className="text-statistic">Количество невыполненных привычек {statsUnfulfilledGoals}</h3>
         <br />
         <button className="button-for-delete-or-add" onClick={handleResetStatsAndLocalStorage}>
            Сбросить статистику (восстановить ее уже не получится)
        </button>
      </div>
    </div>
    </>
  );
};

export default GoalList;
