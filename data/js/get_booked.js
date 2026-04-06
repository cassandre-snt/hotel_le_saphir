async function fetchBookedDates(suiteName) {
    const response = await fetch(`get_booked_dates.php?suite=${encodeURIComponent(suiteName)}`);
    return await response.json();
}

async function initCalendar() {
    const suiteSelect = document.querySelector('select[name="room_type"]');
    let bookedDates = await fetchBookedDates(suiteSelect.value);

    const fp = flatpickr(".datepicker", {
        dateFormat: "Y-m-d",
        minDate: "today",
        disable: bookedDates,
    });

    suiteSelect.addEventListener('change', async () => {
        const newDates = await fetchBookedDates(suiteSelect.value);
        fp.forEach(instance => instance.set('disable', newDates));
    });
}

initCalendar();