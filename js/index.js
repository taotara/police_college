// Change Theme
let darkMode = localStorage.getItem('darkMode');
const themeToggler = document.querySelector('.theme-toggler');

const enableDarkMode = () => {
  document.body.classList.add('dark-theme-variables');

  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-theme-variables');

  localStorage.setItem('darkMode', 'null');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

themeToggler.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// const themeToggler = document.querySelector('.theme-toggler');

// themeToggler.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme-variables');

//   themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//   themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// });

// Show Sidebar
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// Close Sidebar
const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// Tabs
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function openList() {
  content1.style.transform = 'translateX(0)';
  content2.style.transform = 'translateX(110%)';
  btn1.style.cssText = 'color: #383167; font-weight: 800';
  btn2.style.cssText = 'color: #7d8da1; font-weight: 300';
  content1.style.transitionDelay = '0.3s';
  content2.style.transitionDelay = '0s';
}

function openAddUser() {
  content1.style.transform = 'translateX(110%)';
  content2.style.transform = 'translateX(0)';
  btn1.style.cssText = 'color: #7d8da1; font-weight: 300';
  btn2.style.cssText = 'color: #383167; font-weight: 800';
  content1.style.transitionDelay = '0s';
  content2.style.transitionDelay = '0.3s';
}

// -----------------------CHARTS-----------------------
// Bar Chart

var barChartOptions = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200],
    },
  ],
  
  chart: {
    type: 'bar',
    height: 350,
    width: '100%',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'October',
      'December',
    ],
  },
  fill: {
    colors: ['#008FFB']
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        chart: {
          width: 600
        },
      }
    }
  ]
};

var chart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
chart.render();

// Donut Chart

var donutChartOptions = {
  chart: {
    type: 'donut',
    width: '100%',
  },
  legend: {
    show: true,
    position: 'bottom',
    verticalAlign: 'bottom',
  },
  series: [45, 50],
  labels: ['Male', 'Female'],
  colors: ['#008FFB', '#F9A3A4'],
};

var chart = new ApexCharts(
  document.querySelector('#donut-chart'),
  donutChartOptions
);
chart.render();

// pie Chart

var pieChartOptions = {
  chart: {
    type: 'pie',
    width: '100%',
  },
  legend: {
    show: true,
    position: 'bottom',
    verticalAlign: 'bottom',
  },

  series: [45, 50],
  labels: ['Degree', 'School Cert'],
  colors: ['#FFD700', '#026606'],
};

var chart = new ApexCharts(
  document.querySelector('#pie-chart'),
  pieChartOptions
);
chart.render();
