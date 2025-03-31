let queues = {
    plan1: 0,
    plan2: 0,
    plan3: 0,
    plan4: 0,
    plan5: 0,
    plan6: 0
};

function callQueue(plan) {
    // เพิ่มคิวให้แผนการเรียนนั้น
    queues[plan]++;
    
    // แสดงคิวปัจจุบัน
    document.getElementById(`queue-${plan}`).textContent = `คิวปัจจุบัน: ${queues[plan]}`;

    // เล่นเสียง
    const audio = document.getElementById('queue-sound');
    audio.play();
}
