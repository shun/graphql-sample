## Access the system
- ***ID***
    - UC-001
- ***Overview***
    - access the system
- ***Actors***
    - User
    - frontend
    - backend
- ***Predictions***
    - none
- ***Postcondition***
    - display the material timelanes
- ***Main Course***
    - User access the system page
    - backend get all available material info
    - frontend render top page
- ***Alternate Course***
    - none
- ***Exceptions***
    - none

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
:open site;
|backend|
:get all materials;
|frontend|
:render material timelane view;
end
@enduml
```