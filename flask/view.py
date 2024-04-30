from flask import request, jsonify
from main import app, db
from models import Receita, Despesa


@app.route('/receitas', methods=['GET'])
def get_receitas():
    receitas = Receita.query.all()
    receitas_dic = []
    for receita in receitas:
        receita_dic = {
            'id_receita': receita.id_receita,
            'nome': receita.nome,
            'data_emissao': receita.data_emissao,
            'valor_receita': receita.valor_receita,
        }
        receitas_dic.append(receita_dic)

    return jsonify(mensagem=receitas_dic)


@app.route('/receitas', methods=['POST'])
def adicionar_receita():
    receita = request.json

    if float(receita.get('valor_receita')) <= 0:
        return jsonify(mensagem="Erro: Preço menor que 0")

    nova_receita = Receita(
        nome=receita.get('nome'),
        data_emissao=receita.get('data_emissao'),
        valor_receita=receita.get('valor_receita')
    )

    db.session.add(nova_receita)
    db.session.commit()

    return jsonify(mensagem="Receita adicionada")


@app.route('/receitas/<int:id_receita>', methods=['PUT'])
def put_receita(id_receita):
    receita = Receita.query.get(id_receita)

    if not receita:
        return jsonify(mensagem="Erro: Receita não encontrada")

    data = request.json
    receita.nome = data.get('nome', receita.nome)
    receita.data_emissao = data.get('data_emissao', receita.data_emissao)
    receita.valor_receita = data.get('valor_receita', receita.valor_receita)

    db.session.commit()

    return jsonify(mensagem="Receita modificada")


@app.route('/receitas/<int:id_receita>', methods=['DELETE'])
def delete_receita(id_receita):
    receita = Receita.query.get(id_receita)

    if not receita:
        return jsonify(mensagem="Erro: Receita não encontrada")

    db.session.delete(receita)
    db.session.commit()

    return jsonify(mensagem="Receita deletada")


# ------------------------ Despesas ----------------
@app.route('/despesas', methods=['GET'])
def get_despesas():
    despesas = Despesa.query.all()
    despesas_dic = []
    for despesa in despesas:
        despesa_dic = {
            'id_despesa': despesa.id_despesa,
            'nome': despesa.nome,
            'data_emissao': despesa.data_emissao,
            'valor_despesa': despesa.valor_despesa,
        }
        despesas_dic.append(despesa_dic)

    return jsonify(mensagem=despesas_dic)


@app.route('/despesas', methods=['POST'])
def adicionar_despesa():
    despesa = request.json

    if float(despesa.get('valor_despesa')) <= 0:
        return jsonify(mensagem="Erro: Preço menor que 0")

    nova_despesa = Despesa(
        nome=despesa.get('nome'),
        data_emissao=despesa.get('data_emissao'),
        valor_despesa=despesa.get('valor_despesa')
    )
    db.session.add(nova_despesa)
    db.session.commit()

    return jsonify(mensagem="Despesa adicionada")


@app.route('/despesas/<int:id_despesa>', methods=['PUT'])
def put_despesa(id_despesa):
    despesa = Despesa.query.get(id_despesa)

    if not despesa:
        return jsonify(mensagem="Erro: Despesa não encontrada")

    data = request.json
    despesa.nome = data.get('nome', despesa.nome)
    despesa.data_emissao = data.get('data_emissao', despesa.data_emissao)
    despesa.valor_despesa = data.get('valor_despesa', despesa.valor_despesa)

    db.session.commit()

    return jsonify(mensagem="Despesa modificada")


@app.route('/despesas/<int:id_despesa>', methods=['DELETE'])
def delete_despesa(id_despesa):
    despesa = Despesa.query.get(id_despesa)

    if not despesa:
        return jsonify(mensagem="Erro: Despesa não encontrada")

    db.session.delete(despesa)
    db.session.commit()

    return jsonify(mensagem="Despesa deletada")
