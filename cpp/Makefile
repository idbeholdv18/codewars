CC = g++
CFLAGS = -I src -Wall -Wextra -std=c++17

# Директория с исходниками зависит от TASK
SRC_DIR = src/$(TASK)
SRC = $(SRC_DIR)/$(TASK).cpp

OUT_DIR = bin
OUT = $(OUT_DIR)/$(TASK)

all: check_task
	mkdir -p $(OUT_DIR)  # Создаём папку, а не файл!
	$(CC) $(CFLAGS) $(SRC) -o $(OUT)

check_task:
ifndef TASK
	$(error TASK is not set. Use 'make TASK=task_name')
endif

clean:
	rm -rf $(OUT_DIR)/*