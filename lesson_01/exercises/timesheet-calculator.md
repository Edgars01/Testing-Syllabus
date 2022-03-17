# Timesheet Calculator

You are to develop a simple timesheet calculator application. It must take a start time in HH:mm format and an end time in HH:mm format. It must also take an optional break duration in HH:mm format to represent the duration of lunch. The result must be emitted in HH:mm format.

All times must be in 24-hour time format, no AM/PM.

Allow for users to invert the start and end times and still calculate the result properly.

**You may not use Timespan of other built-in DateTime capabilities to do this kata.**

### Examples

```
Start Time : 08:42
End Time: 16:20
Break Duration : 00:30
Result : 07:08
```

```
Start Time : 17:02
End Time: 08:09
Break Duration : 00:35
Result : 08:28
```

```
Start Time : 07:02
End Time: 16:22
Result : 09:20
```

### Bonus

- Allow for three and 4 digit numbers to be entered without needing a : to separate HH from mm.
  - If three digits assume H:mm format.
- Allow for the user to input AM/PM instead of only using 24-hour time. E.g 08:00 AM
