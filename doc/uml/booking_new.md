## Making a material reservation.

- ***ID***
    - UC-001
- ***Overview***
    - making material reservation
- ***Actors***
    - User
    - frontend
    - backend
- ***Predictions***
    - User accessed the system and system displayed top page
- ***Postcondition***
    - store reservation data into DB
    - display latest booking info on the page
- ***MC:Main Course***
    - 1: click a timelane of the material which you want to book
    - 2: input reservation info
    - 3: click the submit button
    - 4: display the reservation info on the timelane
- ***AC:Alternate Course***
    - after MC-1 or MC2
        - click the cancel button then JUST hide the input reservation dialog
    - after MC-3
        - display alert dialog with "double booking" message
        - click "OK" then hide the alert dialog
- ***EX:Exceptions***
    - after MC-3
        - display error dialog with error message when internal error or something occures

```puml
@startuml
skinparam activity {
    ArrowColor #424242
    BackgroundColor #616161
    FontColor #ffffff
    BorderColor none
    DiamondBorderColor none
    DiamondBackgroundColor #616161
    DiamondFontColor #ffffff
}

|User|
|#E3F2FD|frontend|
|#FCE4EC|backend|

|User|
start
:click a material on the timelane;
|frontend|
:show reservation dialog;
|User|
:input reservation info;
:submit the reservation;
|frontend|
:create reservation req data;
:submit reservation req data;
-> POST;
|backend|
if (double booking ?) then (yes)
    :create error response;
    |frontend|
    :show error message: **"double booking"** ;
    end

else (no)
|backend|
:create reservation info entity;
:stop reservation info entity;
endif
:create response data;
:send response;
|frontend|
:render response data;

end

@enduml
```