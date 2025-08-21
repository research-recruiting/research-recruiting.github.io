// Chart configurations and data
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        }
    }
};

// GitHub Activity Chart
const githubCtx = document.getElementById('githubChart').getContext('2d');
new Chart(githubCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Commits',
            data: [45, 52, 38, 67, 73, 89, 95, 78, 82, 91, 67, 85],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
        }, {
            label: 'Pull Requests',
            data: [12, 15, 8, 23, 18, 25, 32, 28, 22, 35, 19, 27],
            borderColor: '#764ba2',
            backgroundColor: 'rgba(118, 75, 162, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...chartOptions,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Publication Timeline Chart
const publicationCtx = document.getElementById('publicationChart').getContext('2d');
new Chart(publicationCtx, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Publications',
            data: [8, 12, 15, 18, 23, 28],
            backgroundColor: 'rgba(102, 126, 234, 0.8)',
            borderColor: '#667eea',
            borderWidth: 2
        }]
    },
    options: {
        ...chartOptions,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Citation Impact Chart
const citationCtx = document.getElementById('citationChart').getContext('2d');
new Chart(citationCtx, {
    type: 'doughnut',
    data: {
        labels: ['Top 10 Papers', 'Next 20 Papers', 'Other Papers'],
        datasets: [{
            data: [4500, 2800, 1132],
            backgroundColor: [
                '#667eea',
                '#764ba2',
                '#a8b3f0'
            ],
            borderWidth: 0
        }]
    },
    options: {
        ...chartOptions,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Research Topics Chart
const topicsCtx = document.getElementById('topicsChart').getContext('2d');
new Chart(topicsCtx, {
    type: 'radar',
    data: {
        labels: ['Deep Learning', 'Computer Vision', 'NLP', 'Robotics', 'AI Ethics', 'MLOps'],
        datasets: [{
            label: 'Research Focus',
            data: [95, 85, 78, 45, 67, 72],
            backgroundColor: 'rgba(102, 126, 234, 0.2)',
            borderColor: '#667eea',
            borderWidth: 2,
            pointBackgroundColor: '#667eea',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#667eea'
        }]
    },
    options: {
        ...chartOptions,
        scales: {
            r: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate stats on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statCards = entry.target.querySelectorAll('.stat-card h3');
            statCards.forEach((stat, index) => {
                const finalValue = parseInt(stat.textContent.replace(/,/g, ''));
                animateValue(stat, 0, finalValue, 2000, index * 200);
            });
        }
    });
}, observerOptions);

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
    observer.observe(statsGrid);
}

function animateValue(element, start, end, duration, delay) {
    setTimeout(() => {
        const startTimestamp = performance.now();
        const step = (timestamp) => {
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, delay);
}