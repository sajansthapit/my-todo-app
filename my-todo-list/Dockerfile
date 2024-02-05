FROM maven:3.9.6-sapmachine-17 
WORKDIR /to-do
COPY pom.xml .
COPY src ./src
RUN mvn package -Dmaven.test.skip
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "target/my-todo-list-0.0.1-SNAPSHOT.jar"]
