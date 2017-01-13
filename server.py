import socket, json, re, errno, signal, os

def grim_reaper(signum, frame):
    while True:
        try:
            pid, status = os.waitpid(
                -1,          # Wait for any child process
                 os.WNOHANG  # Do not block and return EWOULDBLOCK error
            )
        except OSError:
            return

        if pid == 0:  # no more zombies
            return

def getFile(path):
    f = '/var/www/html'+path
    return open(f, 'rb+').read()

def handle(client_connection):
    request = client_connection.recv(4096)
    request = request.decode()

    for line in request.split('\n'):
        if 'GET' in line:
            path = line.split(' ')[1]
            if re.search('(/)$', path):
                path += 'index.html'
            break

    html = getFile(path)
    http_response = html
    client_connection.sendall(http_response)
    client_connection.close()

def main(host, port):
    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listen_socket.bind((host, port))
    listen_socket.listen(1024)
    print("Serving on Port", port)

    signal.signal(signal.SIGCHLD, grim_reaper)

    while True:
        try:
            client_connection, client_address = listen_socket.accept()
        except IOError as e:
            code, msg = e.args
            # restart 'accept' if it was interrupted
            if code == errno.EINTR:
                continue
            else:
                raise

        pid = os.fork()
        if pid == 0:  # child
            listen_socket.close()  # close child copy
            handle(client_connection)
            client_connection.close()
            os._exit(0)
        else:  # parent
            client_connection.close()  # close parent copy and loop over

if __name__ == "__main__":
    main("", 80)
