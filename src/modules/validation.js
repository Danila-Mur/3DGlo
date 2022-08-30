const validation = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const calcItem = document.querySelectorAll('.calc-item'),
      topForm = document.querySelector('#form1'),
      nameInput = topForm.querySelector('input[type=text]'),
      topFormBtn = topForm.querySelector('.form-btn');

    calcItem.forEach((item) => {
      item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\.]/, '');
        console.log(e.target.value);
      });
    });

    topFormBtn.addEventListener('submit', () => {
      
    })
  });
};

export default validation;
