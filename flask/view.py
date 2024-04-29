from flask import request, session, jsonify
from flask_bcrypt import generate_password_hash, check_password_hash
from main import app, db
from models import Usuario, Receita, Despesa


@app.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')

    user = Usuario.query.filter_by(email=email).first()
    if not user:
        return jsonify(mensagem="Erro: Usuário não encontrado")

    senha = check_password_hash(user.senha, password)
    if not senha:
        return jsonify(mensagem="Erro: Senha incorreta")

    session['id'] = user.id
    return jsonify(mensagem="Usuário logado")


@app.route('/logout', methods=['POST'])
def logout():
    session.pop('id', None)
    return jsonify(mensagem="Usuário deslogado")


@app.route('/cadastro', methods=['POST'])
def cadastro_post():
    username = request.form['username']
    email = request.form['email']
    senha = request.form['password']

    user = Usuario.query.filter_by(email=email).first()
    if not user:
        senha_hash = generate_password_hash(senha).decode('utf-8')
        new_user = Usuario(
            nome=username, email=email,
            senha=senha_hash)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(mensagem="Usuário cadastrado")
    else:
        jsonify(mensagem="Erro: Email já está em uso.")


@app.route('/adicionar_receita', methods=['POST'])
def adicionar_receita():
    if 'id' not in session:
        return jsonify(mensagem="Usuário não está logado")

    nome = request.form['nome']
    data = request.form['data']
    preco = request.form['preco']

    if float(preco) <= 0:
        return jsonify(mensagem="Erro: Preço menor que 0")

    nova_receita = Receita(id_usuario=session['id'], nome=nome, data_emissao=data, valor_receita=preco)
    db.session.add(nova_receita)
    db.session.commit()

    return jsonify(mensagem="Receita adicionada")


@app.route('/adicionar_despesa', methods=['POST'])
def adicionar_despesa():
    if 'id' not in session:
        return jsonify(mensagem="Usuário não está logado")

    nome = request.form['nome']
    data = request.form['data']
    preco = request.form['preco']

    if float(preco) <= 0:
        return jsonify(mensagem="Erro: Preço menor que 0")

    nova_despesa = Despesa(id_usuario=session['id'], nome=nome, data_emissao=data, valor_despesa=preco)
    db.session.add(nova_despesa)
    db.session.commit()

    return jsonify(mensagem="Despesa adicionada")


@app.route('/receitas/<int:id_receita>', methods=['PUT'])
def put_receita(id_receita):
    if 'id' not in session:
        return jsonify(mensagem="Usuário não está logado")

    receita = Receita.query.get(id_receita)

    if receita:
        data = request.json
        receita.nome = data.get('nome', receita.nome)
        receita.data_emissao = data.get('data_emissao', receita.data_emissao)
        receita.valor_receita = data.get('valor_receita', receita.valor_receita)

        db.session.commit()

    return jsonify(mensagem="Receita modificada")


@app.route('/receitas/<int:id_receita>', methods=['DELETE'])
def delete_receita(id_receita):
    if 'id' not in session:
        return jsonify(mensagem="Usuário não está logado")

    receita = Receita.query.get(id_receita)

    if receita:
        db.session.delete(receita)
        db.session.commit()

    return jsonify(mensagem="Receita deletada")


@app.route('/despesas/<int:id_despesa>', methods=['PUT'])
def put_despesa(id_despesa):
    if 'id' not in session:
        return jsonify(mensagem="Usuário não está logado")

    despesa = Receita.query.get(id_despesa)

    if despesa:
        data = request.json
        despesa.nome = data.get('nome', despesa.nome)
        despesa.data_emissao = data.get('data_emissao', despesa.data_emissao)
        despesa.valor_receita = data.get('valor_receita', despesa.valor_receita)

        db.session.commit()

    return jsonify(mensagem="Despesa modificada")


@app.route('/despesas/<int:id_despesa>', methods=['DELETE'])
def delete_despesa(id_despesa):
    if 'id' not in session:
        return jsonify(mensagem="Usuário não está logado")

    despesa = Receita.query.get(id_despesa)

    if despesa:
        db.session.delete(despesa)
        db.session.commit()

    return jsonify(mensagem="Despesa deletada")
