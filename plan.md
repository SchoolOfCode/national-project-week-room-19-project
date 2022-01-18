
create table user (
    user_id serialid primary key
    name text
);

create table task (
    task_id serialid primary key,
    user_id int foreign key on user(user_id),
    thoughts text,
    feelings text
)

select task_id, thoughts, feelings
from task
join user on task.user_id = user.user_id
where user.name = $1

insert into task (user_id, thoughts, feelings)
values (
    (select user_id from user where name = $1),
    $2,
    $3
)